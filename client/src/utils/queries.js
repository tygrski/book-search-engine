import { gql } from '@apollo/client';

 export const QUERY_ME = gql`
 {
     me {
        _id
        username
        email
        bookCount
        savedBooks {
            description
            bookId
            author
            image
            link
            title
        }
     }
 }
`;

