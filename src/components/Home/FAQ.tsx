import { useState } from 'react';


function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do I need a license to rent a yacht?",
      answer: "hello"
    },
    {
      id: 2,
      question: "What is included in the yacht rental price?",
      answer: "hello"
    },
    {
      id: 3,
      question: "How do I make a booking?",
      answer: "hello"
    },
    {
      id: 4,
      question: "What happens in case of bad weather?",
      answer: "hello"
    },
    {
      id: 5,
      question: "Can I bring food and drinks on board?",
      answer: "hello"
    },
    {
      id: 6,
      question: "What should I bring for my yacht trip?",
      answer: "hello"
    }
  ];

  const toggleQuestion = (id:any) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our yacht rental services. If you can't find what you're looking 
            for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openQuestion === faq.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>

                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                  )}
                </div>
              </button>
              
              {openQuestion === faq.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-6">
            Still have questions?
          </p>
          <button className="text-[var(--color-primary)] bg-[var(--color-third)] hover:bg-green-500 font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default FAQSection;