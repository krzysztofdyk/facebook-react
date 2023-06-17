function Footer() {
  return (
    <div className="foobar">
      <div>
        {true && "Service by Krzysztof Dyk. "}
        {false && "nothing"}
        {"Version: 1.0"}
      </div>
    </div>
  );
}

export default Footer;
