"use client";
import Image from "next/image";
import { PixelBorder } from "../components/PixelBorder";
import { useState } from "react";

import { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        {children}
        <button onClick={onClose} className="win98-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default function Office() {
  const [showModal, setShowModal] = useState(false);

  const officeApps = [
    {
      name: "Word",
      icon: "/word-icon.gif",
      description: "Create and edit text documents",
    },
    {
      name: "Excel",
      icon: "/excel-icon.gif",
      description: "Spreadsheets and data analysis",
    },
    {
      name: "PowerPoint",
      icon: "/powerpoint-icon.gif",
      description: "Create stunning presentations",
    },
    {
      name: "Access",
      icon: "/access-icon.gif",
      description: "Database management system",
    },
    {
      name: "Outlook",
      icon: "/outlook-icon.gif",
      description: "Email and personal information manager",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">
        Microsoft Office
      </h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <p className="mb-4">
            Explore the latest features of Microsoft Office suite:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officeApps.map((app) => (
              <div key={app.name} className="flex items-start">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <div>
                  <h3 className="font-bold">{app.name}</h3>
                  <p>{app.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              className="win98-btn px-4 py-2"
              onClick={() => setShowModal(true)}
            >
              Get Microsoft Office
            </button>
          </div>
        </div>
      </PixelBorder>
      <div className="mt-4 items-center justify-center flex">
        <Image
          src="/office-logo.gif"
          alt="Microsoft Office Logo"
          width={350}
          height={150}
        />
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Thank you for your interest in Microsoft Office!</p>
          <p>
            Visit the official Microsoft website to purchase or learn more about
            the latest version.
          </p>
        </Modal>
      )}
    </div>
  );
}
