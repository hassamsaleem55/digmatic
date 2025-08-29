import { useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

function Home() {
  const [formFields, setFormFields] = useState([
    {
      name: "title",
      label: "Title",
      type: "text",
      value: "",
      required: false,
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      value: "",
      required: true,
      valid: "",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
      value: "",
      required: false,
    },
  ]);
  return (
    <div className="row">
      <div className="col-lg-6">
        <Card>
          <Form formFields={formFields} setFormFields={setFormFields} />
        </Card>
      </div>
    </div>
  );
}

export default Home;
