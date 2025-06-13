import BottomBar from "@/src/common/components/BottomBar";
import ThemeToggle from "@/src/common/components/ThemeToggle";
import React from "react";

function SettingsScreen() {
  return (
    <div>
      <div>SettingsScreen</div>
      <main>
        <ThemeToggle />
      </main>
      <BottomBar />
    </div>
  );
}

export default SettingsScreen;
