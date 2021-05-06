import { useState, React } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   margin-top: 10px;
`;
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px 0px 0px 32px;
   width: 75%;
`;
const StyledField = styled(Form.Control)`
   width: 100%;
   margin-top: 10px;
`;
const ButtonContainer = styled.div`
   text-align: right;
   margin-right: 32px;
`;

export default () => {
   const [title, setTitle] = useState('Announcement Title');
   const [hyperlink, setHyperlink] = useState('Hyperlink (optional)');
   const [content, setContent] = useState('Write the announcement here...');
   const onChangeTitle = (e) => {
      setTitle(e.target.value);
   };
   const onChangeHyperlink = (e) => {
      setHyperlink(e.target.value);
   };
   const onChangeContent = (e) => {
      setContent(e.target.value);
   };

   return (
      <div>
         <ButtonContainer>
            <Button variant="danger">Review</Button>
         </ButtonContainer>
         <Form>
            <Form.Row>
               <InputContainer>
                  <StyledField
                     class="text-center"
                     required
                     type="text"
                     defaultValue={title}
                     onChange={onChangeTitle}
                     size="lg"
                  />
               </InputContainer>
               <InputContainer>
                  <Header2>Link</Header2>
                  <StyledField
                     class="text-center"
                     required
                     type="text"
                     defaultValue={hyperlink}
                     onChange={onChangeHyperlink}
                     size="lg"
                  />
                  <Header2>Body</Header2>
                  <StyledField
                     class="text-center"
                     required
                     type="text-area"
                     defaultValue={content}
                     onChange={onChangeContent}
                     as="textarea"
                     rows={7}
                  />
               </InputContainer>
            </Form.Row>
         </Form>
      </div>
   );
};
