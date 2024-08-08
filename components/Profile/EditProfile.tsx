import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "@/components/UI/Button/Button";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { PartialUserData, User } from "@/types/user";
import OutlineButton from "@/components/UI/Button/OutlineButton";
import WhiteButton from "@/components/UI/Button/WhiteButton";

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  userData: User;
  onUpdate: (data: PartialUserData) => void;
}

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({
  isOpen,
  onClose,
  userData,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<PartialUserData>({
    id: userData?.id || "",
    name: userData?.name || "",
    bio: userData?.bio || "",
    avatar: userData?.avatar || "",
    socials: userData?.socials || {},
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, logout } = usePrivy();
  const router = useRouter();
  const socialPlatforms = [
    "Farcaster",
    "Lens",
    "X",
    "LinkedIn",
    // "Instagram",
    "GitHub",
  ];

  useEffect(() => {
    if (userData) {
      setFormData({
        id: userData.id || "",
        name: userData.name || "",
        bio: userData.bio || "",
        avatar: userData.avatar || "",
        socials: userData.socials || {},
      });
    }
  }, [userData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleSocialChange = useCallback((platform: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      socials: {
        ...prevData.socials,
        [platform]: value,
      },
    }));
  }, []);

  const handleAvatarChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("userId", userData.id);

        try {
          const response = await fetch("/api/uploadAvatar", {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          if (data.success) {
            setFormData((prevData) => ({
              ...prevData,
              avatar: data.avatarUrl,
            }));
          } else {
            throw new Error(data.message || "Failed to upload avatar");
          }
        } catch (error) {
          console.error("Error uploading avatar:", error);
          // Show error message to user
        } finally {
          setIsUploading(false);
        }
      }
    },
    [userData.id]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/updateUser", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          await onUpdate(formData as PartialUserData);
          onClose();
        } else {
          throw new Error(data.message || "Failed to update user");
        }
      } catch (error) {
        console.error("Error updating user:", error);
        // Show error message to user
      }
    },
    [formData, onUpdate, onClose]
  );

  const handleDeleteAccount = useCallback(async () => {
    if (user?.id) {
      try {
        setIsDeleteModalOpen(false);

        const response = await fetch(`/api/deleteUser`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user?.id,
            privyAppId: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
            privyAppSecret: process.env.NEXT_PUBLIC_PRIVY_APP_SECRET,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        await logout();
        router.push("/");
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    }
  }, [user, logout, router]);

  if (!formData) {
    return null;
  }

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-lg rounded-2xl bg-black border border-gray-600 p-6 h-5/6 overflow-auto">
            <DialogTitle className="text-lg font-cg-regular leading-6 text-gray-200">
              Edit Profile
            </DialogTitle>
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-white/10 pb-12">
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-100"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                          <input
                            id="name"
                            name="name"
                            value={formData?.name}
                            onChange={handleInputChange}
                            placeholder="shrutz"
                            type="text"
                            autoComplete="name"
                            className="pl-2 flex-1 border-0 bg-transparent py-1.5 text-gray-100 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-100"
                      >
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData?.bio}
                          onChange={handleInputChange}
                          placeholder="Bio"
                          rows={3}
                          className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        Write a few sentences about yourself.
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="photo"
                        className="block text-sm font-medium leading-6 text-gray-100"
                      >
                        Avatar
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        {formData.avatar ? (
                          <img
                            src={formData?.avatar}
                            alt="Avatar"
                            className="h-16 w-16 rounded-full object-cover"
                          />
                        ) : (
                          <UserCircleIcon
                            className="h-16 w-16 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleAvatarChange}
                          accept="image/*"
                          className="hidden"
                        />
                        <OutlineButton
                          onClick={(e) => {
                            e.preventDefault(); // Prevent form submission
                            fileInputRef.current?.click();
                          }}
                          disabled={isUploading}
                          additionalStyles="text-sm text-gray-200 border border-gray-700 hover:shadow-sm hover:shadow-gray-600 px-4 py-1 font-polysans"
                        >
                          {isUploading ? "Uploading..." : "Change"}
                        </OutlineButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-12">
                  <h2 className="text-md font-cg-regular leading-7 text-gray-100">
                    Social Information
                  </h2>
                  <p className="text-sm leading-6 text-gray-400">
                    Use social links to tell users more about you
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {socialPlatforms.map((platform) => (
                      <div className="sm:col-span-3" key={platform}>
                        <label
                          htmlFor="social"
                          className="block text-sm font-medium leading-6 text-gray-100"
                        >
                          {platform}
                        </label>
                        <div className="mt-2">
                          <input
                            id="social"
                            type="text"
                            value={formData?.socials![platform] || ""}
                            onChange={(e) =>
                              handleSocialChange(platform, e.target.value)
                            }
                            placeholder={`Link to your ${platform} account`}
                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 pl-2 text-gray-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-b border-white/10 py-8">
                <h1 className="text-gray-100 text-lg font-cg-regular">
                  Delete Account
                </h1>
                <p className="text-gray-400 text-sm max-w-xs">
                  Delete account and remove attached address. This action is
                  irreversible.
                </p>

                <WhiteButton
                  onClick={() => setIsDeleteModalOpen(true)}
                  additionalStyles="px-4 py-1 mt-4 transition ease-in"
                >
                  Delete Account
                </WhiteButton>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-3 py-2 text-sm font-polysans text-gray-100 shadow-sm hover:bg-transparent hover:border hover:border-gray-800 transition ease-in"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Delete Confirmation Modal */}
      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-sm rounded-2xl bg-black border border-gray-600 p-6">
            <DialogTitle className="text-lg font-medium leading-6 text-gray-100">
              Confirm Account Deletion
            </DialogTitle>
            <p className="mt-2 text-sm text-gray-400">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                onClick={() => setIsDeleteModalOpen(false)}
                additionalStyles="border border-gray-700 hover:shadow-sm hover:shadow-gray-600 text-gray-100 px-4 py-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDeleteAccount}
                additionalStyles="bg-red-500 hover:shadow-sm hover:shadow-gray-600 text-gray-100 px-4 py-1"
              >
                Delete
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default EditProfileDialog;
