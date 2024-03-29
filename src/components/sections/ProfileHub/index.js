"use client";
import PageWrapper from "../PageWrapper";
import ProfileMenu from "@/components/sections/ProfileMenu";
import ProfileContent from "@/components/sections/ProfileContent";
import styles from "./profile.module.scss";
import MultipleProductsHomeSection from "../ProductsHomeSection";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { apiGet } from "@/helpers/api";
import { useSnackbar } from "@/hooks/useSnakBar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("/profile/wishlist");
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const { data: session } = useSession();
  const { openSnackbar } = useSnackbar();
  const [userDetails, setUserDetails] = useState({});
  const getUserDetails = async () => {
    const user = await apiGet(
      "/api/user/" + session?.user?.id,
      {},
      openSnackbar
    );
    setUserDetails(user?.data);
  };
  useEffect(() => {
    if (session) getUserDetails();
    if (tab) {
      setActiveTab("/profile/" + tab);
    }
  }, [tab, session]);

  return (
    <PageWrapper classNames={styles.pageWrapper}>
      <div className={styles.pageContainer}>
        <ProfileMenu
          userDetails={userDetails}
          reloadUserDetails={getUserDetails}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className={styles.content}>
          <ProfileContent
            userDetails={userDetails}
            reloadUserDetails={getUserDetails}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <MultipleProductsHomeSection />
    </PageWrapper>
  );
};

export default Profile;
