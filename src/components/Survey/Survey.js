/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { FaVoteYea } from 'react-icons/fa';
import Title from '../Layout/Title/Title';
import base from '../Airtable';
import { Wrapper } from './styles';

const Survey = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch vote data from Survey table
  const getRecords = async () => {
    const records = await base('Survey')
      .select({})
      .firstPage()
      .catch((err) => console.log(err));

    const newItems = records.map(({ id, fields }) => ({ id, fields }));
    // Pass records to items state
    setItems(newItems);
    setLoading(false);
  };

  // Vote
  const giveVote = async (id) => {
    // Take all items from state
    const tempItems = [...items].map((item) => {
      if (item.id === id) {
        let { id, fields } = item;

        fields = { ...fields, votes: fields.votes + 1 };

        return { id, fields };
      }

      return item;
    });

    const records = await base('Survey')
      .update(tempItems)
      .catch((err) => console.log(err));

    const newItems = records.map(({ id, fields }) => ({ id, fields }));

    setItems(newItems);
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <Wrapper className="section">
      <div className="container">
        <Title title="survey" />
        <h3>most important room in the house?</h3>

        {!loading ? (
          <ul>
            {items.map(({ id, fields: { name, votes } }) => (
              <li key={id}>
                <div className="key">{name.toUpperCase().substring(0, 2)}</div>

                <div>
                  <h4>{name}</h4>
                  <p>{votes} votes</p>
                </div>

                <button onClick={() => giveVote(id)}>
                  <FaVoteYea />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h3>loading...</h3>
        )}
      </div>
    </Wrapper>
  );
};

export default Survey;
