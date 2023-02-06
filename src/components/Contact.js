import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section style={{backgroundColor:"#ff9f78"}} id="contact" className="relative">
      <div  className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="mx-auto lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 style={{color:"#2c435c"}}  className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font mx-auto">
            Contact Me
          </h2>
              <h2 style={{color:"#2c435c"}} className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a style={{color:"#fff9f9"}}  className="text-indigo-400 leading-relaxed">
                caterinapowers444@gmail.com
              </a>
              <h2 style={{color:"#2c435c"}} className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <h2 style={{color:"#fff9f9"}}  className="leading-relaxed">631-624-6081</h2>
          <p style={{color:"#fff9f9"}} className="leading-relaxed mb-5 mt-5">
            Fill out this form or feel free to contact me directly at my email and/or phone number listed above!
          </p>
          <div className="relative mb-4">
            <label style={{color:"#fff6e1"}} htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
            style={{backgroundColor:"#628181"}}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label style={{color:"#fff6e1"}} htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
            style={{backgroundColor:"#628181"}}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
            style={{color:"#fff6e1"}}
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
            style={{backgroundColor:"#628181"}}
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button
          style={{backgroundColor: "#2c435c"}}
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
