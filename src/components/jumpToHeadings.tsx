import { Heading } from "../pages/blog/[id]";
import { Link as ScrollLink } from "react-scroll";

interface SidebarProps {
  headings: Heading[];
}

const JumpToHeadings = ({ headings }: SidebarProps) => {
  if (headings.length === 0) {
    return null;
  } else {
    return (
      <nav className="[&_li]:my-3 bg-purple-300 rounded-md p-5">
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
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
