import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>To head back to the home page click the button bellow</h4>
      <Link to="/">
        {" "}
        <input type="submit" value="HOME" className="btn btn-block" />
      </Link>
    </div>
  );
};

export default About;
