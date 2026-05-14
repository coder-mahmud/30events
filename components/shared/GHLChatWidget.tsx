"use client";

import Script from "next/script";

export default function GHLChatWidget() {
  return (
    <>
      {/* Widget container */}
      <div
        data-chat-widget
        data-widget-id="6a04c79c0d64443e8e61a420"
        data-location-id="SBWd06AE1ehcdntWfmi4"
      />

      {/* External script */}
      <Script
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a04c79c0d64443e8e61a420"
        strategy="afterInteractive"
      />
    </>
  );
}