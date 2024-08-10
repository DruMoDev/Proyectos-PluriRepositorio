import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "daefaefae2",
      label: "This is a header",
      content: "Content for the box bla bla bla bla bla",
    },
    {
      id: "ajdnaendajn",
      label: "This is a header",
      content: "Content for the box bla bla bla bla bla",
    },
    {
      id: " ie4i4kmas",
      label: "This is a header",
      content: "Content for the box bla bla bla bla bla",
    },
    {
      id: "id4i56iasdnd",
      label: "This is a header",
      content: "Content for the box bla bla bla bla bla",
    },
  ];

  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
