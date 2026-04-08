import type { CSSProperties } from "react";

const firstName = 'Sergio';
const lastName = 'Córdoba';

const favoriteGames = ['GTAV', 'No Mans Sky', 'Monster Hunter'];
const isActive = true;

const address = {
  zipCode: 'ABC-1234',
  country: 'Spain',
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
}

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>

      <p> {favoriteGames.join(', ')} </p>

      <h1> {isActive ? 'Activo' : 'No activo'} </h1>

      <p style={myStyles}>
        {JSON.stringify(address)}
      </p>
    </>
  );
}