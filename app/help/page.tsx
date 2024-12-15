"use client";
import { useState } from "react";
import Image from "next/image";
import { PixelBorder } from "../components/PixelBorder";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, title, children }: ModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded max-w-lg w-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {children}
        <button onClick={onClose} className="win98-btn mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default function Help() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Help</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How do I set Internet Explorer as my default browser?</li>
            <li>How can I clear my browsing history?</li>
            <li>What is ActiveX and how do I enable it?</li>
            <li>How do I add a website to my favorites?</li>
            <li>Why is my connection so slow?</li>
          </ul>
          <h2 className="text-xl font-bold mt-4 mb-2">Troubleshooting</h2>
          <p>
            If you are experiencing issues with Internet Explorer, try the
            following:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Restart your computer</li>
            <li>Clear your browser cache and cookies</li>
            <li>Disable add-ons and plugins</li>
            <li>Check your internet connection</li>
            <li>Contact your system administrator</li>
          </ol>
        </div>
      </PixelBorder>

      <div className="mt-4 flex space-x-4">
        <br />
        Click here!!
        <Image
          src="/help-icon.gif"
          alt="Help"
          width={88}
          height={31}
          onClick={() => setShowHelpModal(true)}
        />
        <Image
          src="/support-icon.gif"
          alt="Support"
          width={88}
          height={31}
          onClick={() => setShowSupportModal(true)}
        />
      </div>
      <Modal
        show={showHelpModal}
        onClose={() => setShowHelpModal(false)}
        title="Help Information"
      >
        <p>
          Here you can find more detailed help resources and guides to
          troubleshoot common issues.
        </p>
      </Modal>
      <Modal
        show={showSupportModal}
        onClose={() => setShowSupportModal(false)}
        title="Customer Support"
      >
        <p>
          Contact our support team directly for assistance with your issues or
          questions.
        </p>
      </Modal>
    </div>
  );
}
