type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default Container;
