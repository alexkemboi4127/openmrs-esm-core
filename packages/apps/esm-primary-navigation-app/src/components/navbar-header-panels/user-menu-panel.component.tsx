import React from "react";
import {
  ExtensionSlot,
  LoggedInUser,
  useOnClickOutside,
} from "@openmrs/esm-framework";
import { HeaderPanel } from "carbon-components-react/es/components/UIShell";
import { HeaderPanelProps } from "carbon-components-react";
import { UserSession } from "../../types";
import styles from "../../root.scss";

interface UserMenuPanelProps extends HeaderPanelProps {
  user: LoggedInUser;
  allowedLocales: any;
  onLogout(): void;
  session: UserSession;
  hidePanel: () => void;
}

const UserMenuPanel: React.FC<UserMenuPanelProps> = ({
  expanded,
  user,
  allowedLocales,
  onLogout,
  session,
  hidePanel,
}) => {
  const userMenuRef = useOnClickOutside(hidePanel, expanded);

  return (
    <HeaderPanel
      ref={userMenuRef}
      className={styles.headerPanel}
      expanded={expanded}
      aria-label="Location"
      aria-labelledby="Location Icon"
    >
      <ExtensionSlot
        extensionSlotName="user-panel-slot"
        state={{
          user: user,
          allowedLocales: allowedLocales,
          onLogout: onLogout,
          referer: window.location.pathname,
          currentLocation: session?.sessionLocation?.display,
        }}
      />
    </HeaderPanel>
  );
};

export default UserMenuPanel;
