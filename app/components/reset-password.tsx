interface EmailTemplateProps {
  resetLink: string;
}

export function EmailTemplate({ resetLink }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hey, you requested to reset your password.</h1>
      <p>Click the link below to reset it:</p>
      <a href={resetLink}>Reset Password</a>
      <p>If you did not request a password reset, please ignore this email.</p>
      <p>
        Best regards,
        <br />
        The Team
      </p>
    </div>
  );
}
