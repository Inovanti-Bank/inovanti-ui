import { ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface FormAlertProps {
  type?: 'error' | 'success';
  children: ReactNode | string;
  className?: string;
}

export const FormAlert: React.FC<FormAlertProps> = ({ type = 'error', children, className }) => {
  return (
    <p
      className={cn(
        'py-1 text-sm',
        type === 'error' ? 'text-red-400' : 'text-green-500',
        className
      )}
    >
      {children}
    </p>
  );
};

export const FormAlertBlank: React.FC = () => {
  return <p className='h-5' />;
};

FormAlert.displayName = 'FormAlert';
FormAlertBlank.displayName = 'FormAlertBlank';
