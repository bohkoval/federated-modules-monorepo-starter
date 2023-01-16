import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: 0,
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const InputWithLabel: React.FC<{ label: string }> = ({ label }) => (
  <>
    <InputLabel shrink htmlFor="input-with-label">
      {label}
    </InputLabel>
    <Input id="input-with-label" />
  </>
);

export default InputWithLabel;
