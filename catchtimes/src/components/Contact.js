import React from "react";

const Contact = props => {
  console.log(props);

  setTimeout(() => {
    props.history.push("/about");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes. Declarative
        views make your code more predictable and easier to debug.
      </p>
    </div>
  );
};

export default Contact;
