import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

export default function Highlighter({
  disableBorder = false,
  selected = false,
  selectedBg = 'white',
  ...props
}: {
  disableBorder?: boolean;
  selectedBg?: 'white' | 'comfort';
  selected?: boolean;
} & ButtonBaseProps) {
  const lightSelectedBg = {
    white: '#fff',
    comfort: 'grey.50',
  };
  return (
    <ButtonBase
      {...props}
      sx={{
        justifyContent: 'flex-start',
        textAlign: 'left',
        alignItems: 'center',
        borderRadius: 1,
        height: '100%',
        border: '1px solid transparent',
        transitionProperty: 'all',
        transitionDuration: '150ms',
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.600' : 'grey.500'),
        ...((!disableBorder || selected) && {
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.500' : 'grey.200'),
        }),
        ...(selected && {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'primaryDark.700' : lightSelectedBg[selectedBg],
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.300' : 'grey.200'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.500'),
        }),
        ...(!selected && {
          '&:hover, &:focus': {
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.800' : 'grey.100'),
            '@media (hover: none)': {
              bgcolor: 'transparent',
            },
          },
        }),
        ...props.sx,
      }}
    />
  );
}
