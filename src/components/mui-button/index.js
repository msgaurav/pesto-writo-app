import { Button } from '@mui/material';

const MUIButton = (props) => {
  const { title, variant, ...rest } = props;

  return (
    <Button
      variant={variant}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default MUIButton;