import React, { useState } from 'react';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

export default function ForgotPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Reset Password</h2>

        <form>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <SubmitButton>Reset Password</SubmitButton>
        </form>
      </ForgotPassowrdContainer>
    </>
  );
}
