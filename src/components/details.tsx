import { CSSProperties } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToMain = () => navigate('/');

  return (
    <div style={modalStyles} onClick={goToMain}>
      <div style={infoStyles} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyles} onClick={goToMain}>
          X
        </button>
        <div>
          Details component for id <b>{id}</b>
        </div>
      </div>
    </div>
  );
}

const modalStyles: CSSProperties = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'right',
  background: 'rgba(0,0,0,0.2)',
};

const infoStyles: CSSProperties = {
  padding: '10px',
  background: 'white',
  borderLeft: '1px solid gray',
  display: 'flex',
  flexDirection: 'column',
};

const closeBtnStyles: CSSProperties = {
  padding: '3px',
  width: 'fit-content',
  alignSelf: 'end',
  cursor: 'pointer',
};
