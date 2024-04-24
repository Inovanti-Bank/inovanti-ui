import { Text } from '../Text';
import { Loading } from './SimpleLoading';

export interface FullScreenLoadingProps {
  message: string;
}

export function FullScreenLoading({ message }: FullScreenLoadingProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-gray-900 bg-opacity-25  text-black dark:text-white">
        <Text as="span" className="">{message}</Text>
        <Loading size={6} />
    </div>
  );
}