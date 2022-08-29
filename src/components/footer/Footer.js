function Footer() {
  return (
    <div className="foobar">
      <div>
        {true && "Hello by KMD. "}
        {false && "nothing"}
        {"Version: " + Math.random()}
      </div>
    </div>
  );
}

export default Footer;
