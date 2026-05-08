type FAQProps = {
  items: { question: string; answer: string }[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p style={{ marginTop: 12, marginBottom: 0 }}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
