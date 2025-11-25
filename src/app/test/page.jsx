"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import TopControls from "@/components/shared/TopControls/TopControls";

const questions = [
  {
    id: 1,
    text: "Чем больше созвонов, тем лучше: люблю обмениваться опытом с коллегами.",
    options: [
      { text: "О да!", EI: 3 },
      { text: "Да", EI: 2 },
      { text: "Может быть", EI: 1 },
      { text: "Скорее нет", EI: -1 },
      { text: "Нет", EI: -2 },
      { text: "Точно нет", EI: -3 },
    ],
  },
  {
    id: 2,
    text: "Когда я завожу новую таблицу, сразу знаю какие колонки в ней будут.",
    options: [
      { text: "О да!", PJ: 3 },
      { text: "Да", PJ: 2 },
      { text: "Может быть", PJ: 1 },
      { text: "Скорее нет", PJ: -1 },
      { text: "Нет", PJ: -2 },
      { text: "Точно нет", PJ: -3 },
    ],
  },
  {
    id: 3,
    text: "Мне нравится документировать данные, подробно описывать таблицы и дашборды.",
    options: [
      { text: "О да!", PJ: 3 },
      { text: "Да", PJ: 2 },
      { text: "Может быть", PJ: 1 },
      { text: "Скорее нет", PJ: -1 },
      { text: "Нет", PJ: -2 },
      { text: "Точно нет", PJ: -3 },
    ],
  },
  {
    id: 4,
    text: "Мне легче придумать решение проблемы наедине с собой, а не вместе с коллегами.",
    options: [
      { text: "О да!", EI: -3 },
      { text: "Да", EI: -2 },
      { text: "Может быть", EI: -1 },
      { text: "Скорее нет", EI: 1 },
      { text: "Нет", EI: 2 },
      { text: "Точно нет", EI: 3 },
    ],
  },
  {
    id: 5,
    text: "Если что-то непонятно, буду искать ответ в документации — что угодно, лишь бы не задавать вопросы коллегам.",
    options: [
      { text: "О да!", EI: -3 },
      { text: "Да", EI: -2 },
      { text: "Может быть", EI: -1 },
      { text: "Скорее нет", EI: 1 },
      { text: "Нет", EI: 2 },
      { text: "Точно нет", EI: 3 },
    ],
  },
  {
    id: 6,
    text: "Задизайнить неочевидный эксперимент или исследование с множеством вводных VS поэтапно создать дашборд с чистыми данными — всегда выбираю второе!",
    options: [
      { text: "О да!", PJ: 3 },
      { text: "Да", PJ: 2 },
      { text: "Может быть", PJ: 1 },
      { text: "Скорее нет", PJ: -1 },
      { text: "Нет", PJ: -2 },
      { text: "Точно нет", PJ: -3 },
    ],
  },
  {
    id: 7,
    text: "Обо всех новшествах в аналитике узнаю из статей — не люблю общаться с другими аналитиками.",
    options: [
      { text: "О да!", EI: -3 },
      { text: "Да", EI: -2 },
      { text: "Может быть", EI: -1 },
      { text: "Скорее нет", EI: 1 },
      { text: "Нет", EI: 2 },
      { text: "Точно нет", EI: 3 },
    ],
  },
  {
    id: 8,
    text: "Ммммм, планировщики мои планировщики! Обожаю Jira и Tracker.",
    options: [
      { text: "О да!", PJ: 3 },
      { text: "Да", PJ: 2 },
      { text: "Может быть", PJ: 1 },
      { text: "Скорее нет", PJ: -1 },
      { text: "Нет", PJ: -2 },
      { text: "Точно нет", PJ: -3 },
    ],
  },
  {
    id: 9,
    text: "Мне нравится работать со смежными командами — всегда интересно узнать, как устроена их работа.",
    options: [
      { text: "О да!", EI: 3 },
      { text: "Да", EI: 2 },
      { text: "Может быть", EI: 1 },
      { text: "Скорее нет", EI: -1 },
      { text: "Нет", EI: -2 },
      { text: "Точно нет", EI: -3 },
    ],
  },
  {
    id: 10,
    text: "Подробное ТЗ — пустая трата времени. Предпочитаю разбираться с проблемами по мере их поступления.",
    options: [
      { text: "О да!", PJ: -3 },
      { text: "Да", PJ: -2 },
      { text: "Может быть", PJ: -1 },
      { text: "Скорее нет", PJ: 1 },
      { text: "Нет", PJ: 2 },
      { text: "Точно нет", PJ: 3 },
    ],
  },
  {
    id: 11,
    text: "Если мои планы нарушены, я стараюсь как можно скорее вернуться в привычное русло.",
    options: [
      { text: "О да!", PJ: 3 },
      { text: "Да", PJ: 2 },
      { text: "Может быть", PJ: 1 },
      { text: "Скорее нет", PJ: -1 },
      { text: "Нет", PJ: -2 },
      { text: "Точно нет", PJ: -3 },
    ],
  },
  {
    id: 12,
    text: "Между удалёнкой и шумным опенспейсом однозначно выберу работу из дома.",
    options: [
      { text: "О да!", EI: -3 },
      { text: "Да", EI: -2 },
      { text: "Может быть", EI: -1 },
      { text: "Скорее нет", EI: 1 },
      { text: "Нет", EI: 2 },
      { text: "Точно нет", EI: 3 },
    ],
  },
];

const animals = {
  EP: {
    name: "Стремительный колибри",
    img: "/assets/images/colibri.jpg",
    desc: "Ты всегда в движении, ловишь новые идеи на лету и умеешь быстро адаптироваться. Колибри — символ скорости, энергии и общения.",
    tags: ["быстрый", "вдохновляющий", "общительный"],
  },
  EJ: {
    name: "Сосредоточенный лев",
    img: "/assets/images/lion.jpg",
    desc: "Ты прирожденный лидер. Сосредоточен, уверен и всегда добиваешься цели. Лев — твоя сила и спокойная мощь.",
    tags: ["сильный", "организованный", "вдохновляющий"],
  },
  IP: {
    name: "Неловимый хамелеон",
    img: "/assets/images/chameleon.jpg",
    desc: "Ты легко адаптируешься под любую ситуацию и находишь решения, где другие застревают. Хамелеон — символ гибкости и креатива.",
    tags: ["адаптивный", "творческий", "спокойный"],
  },
  IJ: {
    name: "Многозадачный осьминог",
    img: "/assets/images/octopus.jpg",
    desc: "Ты мастер системности. Держишь всё под контролем и одновременно ведёшь несколько процессов. Осьминог — символ интеллекта и эффективности.",
    tags: ["структурный", "рациональный", "точный"],
  },
};

export default function TestPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [EI, setEI] = useState(0);
  const [PJ, setPJ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleSelect = (opt) => setSelected(opt);

  const handleNext = () => {
    if (!selected) return;

    if (selected.EI) setEI((prev) => prev + selected.EI);
    if (selected.PJ) setPJ((prev) => prev + selected.PJ);

    setSelected(null);

    if (step + 1 < questions.length) {
      setStep((p) => p + 1);
    } else {
      calcResult();
    }
  };

  const calcResult = () => {
    let analystType = "";

    if (EI > 0 && PJ > 0) analystType = "EP";
    else if (EI > 0 && PJ < 0) analystType = "EJ";
    else if (EI < 0 && PJ > 0) analystType = "IP";
    else if (EI < 0 && PJ < 0) analystType = "IJ";
    else analystType = "EP"; // 🔥 дефолт, если 0/0 или что-то пошло не так

    const selectedAnimal = animals[analystType];

    if (!selectedAnimal) {
      console.warn("Unknown analyst type:", analystType);
      return;
    }

    const testData = {
      analyst_type: analystType,
      analyst_name: {
        EP: "Аналитик-решала",
        EJ: "Аналитик-суетолог",
        IP: "Аналитик-вайбик",
        IJ: "Аналитик-стратег",
      }[analystType],
      animal: selectedAnimal.name,
      description: selectedAnimal.desc,
      img: selectedAnimal.img,
    };

    setResult(testData);
  };

  if (!started && !result)
    return (
      <main className={s.container}>
        <div className={s.topControls}>
          <TopControls />
        </div>
        <section className={s.welcomeSection}>
          <h1 className={s.title}>Узнай, какой ты аналитик</h1>
          <button className={s.startButton} onClick={() => setStarted(true)}>
            Начать тест
          </button>
        </section>
      </main>
    );

  // Страница результата
  if (result)
    return (
      <main className={s.container}>
        <div className={s.topControls}>
          <TopControls />
        </div>

        <div className={s.resultCard}>
          <div className={s.resultTitleContainer}>
            <h2 className={s.resultTitle}>Вы — {result.analyst_name}</h2>
            <p className={s.subtitle}>
              Ваше тотемное животное — {result.animal}!
            </p>
          </div>

          <div className={s.imageContainer}>
            <img
              src={result.img}
              alt={result.animal}
              className={s.animalImage}
            />
          </div>

          <p className={s.desc}>{result.description}</p>

          <div className={s.buttons}>
            <button
              className={s.btn}
              onClick={() => {
                setResult(null);
                setEI(0);
                setPJ(0);
                setStep(0);
                setStarted(false);
              }}
            >
              Пройти тест ещё раз
            </button>
          </div>
        </div>
      </main>
    );

  // Страница вопросов
  const q = questions[step];

  return (
    <main className={s.container + " " + s.questionContainer}>
      <div className={s.topControls}>
        <TopControls />
      </div>

      <section className={s.questionSection}>
        <h2 className={s.questionTitle}>Вопрос №{step + 1}</h2>
        <p className={s.questionText}>{q.text}</p>

        <div className={s.options}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(opt)}
              className={`${s.option} ${selected === opt ? s.selected : ""}`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        <button className={s.btn} onClick={handleNext}>
          Подтвердить выбор
        </button>
      </section>
    </main>
  );
}
