interface Props {
  title: string;
  subtitle: string;
}

export default function UserMessagesContainer(props: Props) {
  const { title, subtitle } = props;

  return (
    <section
      className="flex flex-col gap-2 h-full items-center justify-center border-1 border-dashed border-gray-300 rounded-lg"
      style={{ borderColor: "#C9CDD1", backgroundColor: "#F5F6F7" }}
    >
      <h1 className="text-3xl font-medium">{title}</h1>

      <h2 className="text-base" style={{ color: "#5E6166" }}>
        {subtitle}
      </h2>
    </section>
  );
}
