import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaBlog } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <Footer container className="bg-gray-900 text-white">
      <div className="w-full px-4 lg:px-24">
        {/* Top Section */}
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white hover:underline">About</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Careers</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white hover:underline">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white hover:underline">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Download" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white hover:underline">iOS</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Android</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">Windows</Footer.Link>
              <Footer.Link href="#" className="text-white hover:underline">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-gray-500 px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="text-2xl font-bold  text-blue-700 flex items-center gap-2">
            <FaBlog /> Books
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
