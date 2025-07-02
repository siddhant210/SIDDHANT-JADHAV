import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

smtp_server = "smtp.gmail.com"
smtp_port = 587
sender_email = "crce.9966.ce@gmail.com"
sender_password = "Missionjee2023"
recipient_email = "crce.9966.ce@gmail.com"

email_subject = "Test Email from Manus"
email_body = "This is a test email sent directly from the backend to verify SMTP configuration."

msg = MIMEMultipart()
msg["From"] = sender_email
msg["To"] = recipient_email
msg["Subject"] = email_subject
msg.attach(MIMEText(email_body, "plain"))

try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(sender_email, sender_password)
    text = msg.as_string()
    server.sendmail(sender_email, recipient_email, text)
    server.quit()
    print("Email sent successfully!")
except Exception as e:
    print(f"Failed to send email: {e}")


