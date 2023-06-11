function Footer() {
  return (
    <div className="foobar">
      <div>
        {true && "Hello by KMD. "}
        {false && "nothing"}
        {"Version: 1.0"}
      </div>
    </div>
  );
}

export default Footer;
