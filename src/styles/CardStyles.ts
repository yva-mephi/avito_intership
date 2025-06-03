export const cardBaseStyle = {
   cursor: 'pointer',
   backgroundColor: 'background.paper',
   transition: 'transform 0.2s ease',
   '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
   },
   borderRadius: '16px',
   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
   padding: '16px',
};
export const cardHeaderStyle = {
   fontSize: '1.2rem',
   fontWeight: 500,
   marginBottom: '12px',
};

export const cardContentStyle = {
   fontSize: '1rem',
   color: '#ccc',
};
