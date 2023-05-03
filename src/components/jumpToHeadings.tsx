import { Heading } from "../pages/blog/[id]";

interface SidebarProps {
  headings: Heading[];
}

const JumpToHeadings = ({ headings }: SidebarProps) => {
  return (
    <nav className="sidebar">
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(heading.text);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default JumpToHeadings;
