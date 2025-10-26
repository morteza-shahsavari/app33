import { useState } from "react";
import QuestionCard from "./assets/Component/QuestionCard";

 const App=()=> {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen flex flex-col gap-10 items-center justify-start bg-slate-100 py-20">
      <h1 className="text-[#c59d5f] text-3xl capitalize font-normal">
        general questions
      </h1>

      <section className="flex flex-col gap-4 items-center w-full">
        <QuestionCard
          title="Do You Accept All Major Credit Cards?"
          expanded={openIndex === 0}
          onToggle={() => toggleCard(0)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.
        </QuestionCard>

        <QuestionCard
          title="Do You Support Local Farmers?"
          expanded={openIndex === 1}
          onToggle={() => toggleCard(1)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.
        </QuestionCard>

        <QuestionCard
          title="Do You Use Organic Ingredients?"
          expanded={openIndex === 2}
          onToggle={() => toggleCard(2)}
        >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.
        </QuestionCard>
      </section>
    </main>
  );
}


export default App

