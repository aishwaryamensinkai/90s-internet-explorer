import Image from 'next/image'
import { PixelBorder } from '../components/PixelBorder'

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">About Internet Explorer</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <div className="flex items-center mb-4">
            <Image src="/ie-logo.png" alt="IE Logo" width={50} height={50} className="mr-4" />
            <p className="text-lg">Internet Explorer: Your Gateway to the World Wide Web</p>
          </div>
          <p className="mb-4">Internet Explorer (IE) is a series of graphical web browsers developed by Microsoft and included as part of the Microsoft Windows line of operating systems, starting in 1995.</p>
          <h2 className="text-xl font-bold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>ActiveX controls and Java applet support</li>
            <li>Dynamic HTML (DHTML) capabilities</li>
            <li>Integrated Windows Explorer functionality</li>
            <li>Customizable toolbars and browser extensions</li>
            <li>Enhanced security features with SSL/TLS support</li>
          </ul>
          <table className="w-full border-collapse border border-gray-400 mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Version</th>
                <th className="border border-gray-400 p-2">Release Date</th>
                <th className="border border-gray-400 p-2">Key Improvements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Internet Explorer 3.0</td>
                <td className="border border-gray-400 p-2">August 13, 1996</td>
                <td className="border border-gray-400 p-2">CSS support, ActiveX</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Internet Explorer 4.0</td>
                <td className="border border-gray-400 p-2">September 30, 1997</td>
                <td className="border border-gray-400 p-2">Dynamic HTML, Active Desktop Integration</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Internet Explorer 5.0</td>
                <td className="border border-gray-400 p-2">March 18, 1999</td>
                <td className="border border-gray-400 p-2">Improved CSS support, XMLHttpRequest</td>
              </tr>
            </tbody>
          </table>
          <div className=" flex items-center justify-center">
            <Image src="/ie-banner.gif" alt="Internet Explorer Banner" width={468} height={60} />
          </div>
        </div>
      </PixelBorder>
    </div>
  )
}

