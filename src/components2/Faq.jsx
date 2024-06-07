import { useState } from "react";
import img from "../assets/fay.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  // State to track which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded state of a question
  const toggleQuestion = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  // Sample questions and answers
  const faqs = [
    {
      question: "Are your courses suitable for beginners?",
      answer:
        "It depends on the course, we offer beginner-friendly courses that cover fundamental concepts, while intermediate and advanced courses may require some prior knowledge in cybersecurity.",
    },
    {
      question: "What is the duration of your courses?",
      answer:
        "The duration varies depending on the course. We offer short courses that last a few weeks and comprehensive programs that span several months.",
    },
    {
      question: "Do you offer trial classes or demos?",
      answer:
        "Yes, we offer trial classes and demo sessions for prospective students to experience our teaching methods and course content before enrolling.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll in our courses through filling out the registration form and selecting your desired course. Alternatively, you can contact our admissions team for assistance.",
    },
    {
      question: "Can I access course materials after completing the course?",
      answer:
        "Yes, we provide lifetime access to course materials for most of our programs, allowing you to review the content whenever you need.",
    },
    {
      question: "Do you offer live classes or recorded sessions?",
      answer:
        "We offer both live classes and recorded sessions. Live classes provide real-time interaction with instructors, while recorded sessions allow you to learn at your own pace.",
    },
    {
      question:
        "What kind of technology and tools will I need for your courses?",
      answer:
        "You will need a reliable computer with internet access. Specific courses may require additional software or tools, which will be provided or recommended by us.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-8">
      {/* Left side with image */}

      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            {/* Question with toggle icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="font-semibold">{faq.question}</div>
              <div>{expandedQuestion === index ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {/* Answer */}
            {expandedQuestion === index && (
              <p className="mt-2 text-sm lg:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Right side with FAQ */}
      <div
        className="hidden lg:block w-full lg:w-1/2 mb-8 lg:mb-0 pl-5 "
        style={{ height: "50%" }}
      >
        <img
          src={img}
          alt="FAQ Illustration"
          className="w-full h-[450px] rounded-xl mt-6"
        />
      </div>
    </div>
  );
};

export default FAQSection;
