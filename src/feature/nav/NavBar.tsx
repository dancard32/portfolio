import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Tooltip,
  Button,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import useStylingStore from "../../redux/store";
import { useShallow } from "zustand/react/shallow";

export default function ResponsiveNavbar() {
  const { isDark, toggleDarkMode, isMobile } = useStylingStore(
    useShallow((state) => ({
      isDark: state.isDark,
      isMobile: state.isMobile,
      toggleDarkMode: state.toggleDarkMode,
    }))
  );
  const [selectedTabId, setSelectedTabId] = useState<string>("home");
  const navigate = useNavigate();

  const HeaderButtonGroup = [
    {
      id: "home",
      displayName: "Home",
      icon: IconNames.HOME,
    },
    {
      id: "education",
      displayName: "Education",
      icon: IconNames.LEARNING,
    },
    {
      id: "experience",
      displayName: "Experience",
      icon: IconNames.DESKTOP,
    },
    {
      id: "projects",
      displayName: "Projects",
      icon: IconNames.PROJECTS,
    },
    {
      id: "contact",
      displayName: "Contact",
      icon: IconNames.PHONE_CALL,
    },
  ];

  return (
    <Navbar className="h-[7vh]!">
      <NavbarGroup className="w-full! justify-center! pt-4 pb-2 md:pt-4">
        {isMobile ? null : (
          <>
            <NavbarHeading style={{ fontFamily: "impact" }}>
              <strong>DanCard()</strong>
            </NavbarHeading>
            <NavbarDivider />
          </>
        )}
        {HeaderButtonGroup.map((item) => {
          return (
            <div key={item.id} className="flex flex-col pl-2 pr-2">
              <Button
                id={item.id}
                text={isMobile ? undefined : item.displayName}
                icon={item.icon}
                active={selectedTabId === item.id}
                size="large"
                variant="minimal"
                onClick={() => {
                  setSelectedTabId(item.id);
                  navigate(
                    item.id === "home" ? "portfolio/" : `portfolio/${item.id}`
                  );
                }}
              />
              {isMobile ? (
                <span className="text-[8px] text-center">
                  {item.displayName}
                </span>
              ) : null}
            </div>
          );
        })}
        <NavbarDivider />
        <Tooltip
          placement="bottom"
          content={isDark ? "Light Theme" : "Dark Theme"}
        >
          <Button
            variant="minimal"
            icon={isDark ? IconNames.FLASH : IconNames.MOON}
            onClick={toggleDarkMode}
          />
        </Tooltip>
      </NavbarGroup>
    </Navbar>
  );
}
