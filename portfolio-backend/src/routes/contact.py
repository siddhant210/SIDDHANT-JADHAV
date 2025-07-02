import sqlite3
from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/contact", methods=["POST"])
def send_contact_email():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ["name", "email", "subject", "message"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"{field} is required"}), 400
        
        name = data["name"]
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        
        # Create email content
        email_subject = f"Portfolio Contact: {subject}"
        email_body = f"""
New contact form submission from your portfolio website:

Name: {name}
Email: {email}
Subject: {subject}
Date: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

Message:
{message}

---
This email was sent from your portfolio contact form.
        """
        
        # Email configuration
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = "sidzt2104@gmail.com"
        sender_password = "Missionjee2022"
        recipient_email = "crce.9966.ce@gmail.com"
        
        # Create message
        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = recipient_email
        msg["Subject"] = email_subject
        msg["Reply-To"] = email
        
        # Add body to email
        msg.attach(MIMEText(email_body, "plain"))
        
        # Save to database
        conn = sqlite3.connect("messages.db")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
                       (name, email, subject, message))
        conn.commit()
        conn.close()

        return jsonify({
            "success": True,
            "message": "Message sent successfully and saved to database!"
        }), 200
            
    except Exception as e:
        print(f"General Error: {str(e)}")
        return jsonify({
            "error": "An error occurred while processing your request.",
            "details": str(e)
        }), 500

@contact_bp.route("/contact/test", methods=["GET"])
def test_contact():
    """Test endpoint to verify the contact route is working"""
    return jsonify({
        "message": "Contact API is working!",
        "timestamp": datetime.now().isoformat()
    }), 200


