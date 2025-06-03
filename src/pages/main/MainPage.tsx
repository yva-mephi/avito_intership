export const MainPage = () => {
   return (
      <div
         style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#121212',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
      >
         <h1
            style={{
               fontSize: '48px',
               fontWeight: 600,
               fontFamily: 'Segoe UI, Inter, sans-serif',
               background: 'linear-gradient(90deg, #2196f3, #3f51b5, #9c27b0, #e91e63)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               margin: 0,
               textAlign: 'center',
            }}
         >
            Стажировка Frontend-направление 2025
         </h1>

         <p
            style={{
               marginTop: '12px',
               color: '#8DCAEE',
               fontSize: '18px',
               fontFamily: 'Segoe UI, Inter, sans-serif',
            }}
         >
            проект на React
         </p>
      </div>
   );
};
