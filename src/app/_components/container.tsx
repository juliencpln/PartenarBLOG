type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>;
};

export default Container;
