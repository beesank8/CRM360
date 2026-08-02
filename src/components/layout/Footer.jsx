function Footer() {

  return (

    <footer
      className="
      h-10
      bg-white
      border-t
      flex
      items-center
      justify-center
      text-xs
      text-gray-500
      "
    >

      © {new Date().getFullYear()} CRM360. All rights reserved.

    </footer>

  );

}


export default Footer;