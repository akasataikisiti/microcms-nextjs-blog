import { JSDOM } from "jsdom";
import { Link as ScrollLink } from "react-scroll";

const JumpToHeadings = ({ body }) => {
  const dom = new JSDOM(body);
  const document = dom.window.document;
  const h2Elements = document.querySelectorAll("h2");
  console.log(h2Elements);
  const h2Array = Array.from(h2Elements).map((element) => {
    return {
      id: element.id,
      text: element.innerHTML,
    };
  });
  console.log(h2Array);

  if (h2Array.length === 0) {
    return <div></div>;
  } else {
    return (
      <nav className="[&_li]:my-3 bg-purple-300 rounded-md p-5">
        <ul>
          {h2Array.map((heading, index) => (
            <li key={index}>
              <ScrollLink
                to={heading.id}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                {heading.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

export default JumpToHeadings;
