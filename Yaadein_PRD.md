# **📄 Product Requirements Document (PRD)**

## **Product Name: Yaadein**

## **Version: MVP v1**

## **Market: Kolkata (Single City)**

## **Owner: Tanbir (No employees)**

---

## **1\. Product Overview**

### **1.1 Purpose**

Build a **simple, trust-focused website** that allows users to:

* Understand the emotional gifting concept quickly  
* Submit a detailed “Gift Planning Request”  
* Pay a **service fee**  
* Continue the journey on WhatsApp

This MVP validates **demand \+ trust**, not scale.

---

### **1.2 MVP Success Definition**

The MVP is successful if within 30 days:

* ≥10 paid orders  
* ≥1 repeat customer  
* Users submit emotionally detailed forms  
* Users are comfortable paying a service fee upfront

---

## **2\. In-Scope vs Out-of-Scope**

### **✅ In Scope (MVP Only)**

* Public website (desktop \+ mobile)  
* Landing page  
* Gift planning form  
* Manual payment flow  
* Basic admin visibility (founder only)

### **❌ Out of Scope (Explicitly NOT in MVP)**

* Mobile app  
* User login / signup  
* Partner onboarding  
* Automation  
* Order tracking UI  
* AI recommendations  
* Multi-city support

---

## **3\. User Personas**

### **Primary User**

* Age: 22–40  
* Busy working professional  
* Emotionally willing, time-poor  
* Comfortable with WhatsApp & UPI

### **Founder (Internal User)**

* Manages orders manually  
* Communicates via WhatsApp  
* Executes gifting personally

---

## **4\. User Flow (End-to-End)**

1. User lands on website  
2. Reads concept \+ trust elements  
3. Clicks **“Plan a Gift”**  
4. Fills gift planning form  
5. Submits form  
6. Sees confirmation page  
7. Gets WhatsApp follow-up from founder  
8. Makes payment  
9. Gift execution begins (offline)

---

## **5\. Functional Requirements**

---

## **5.1 Landing Page**

### **Objective**

Explain concept \+ build trust \+ push user to form.

### **Sections (Top to Bottom)**

#### **A. Hero Section**

* Headline  
* Sub-headline  
* Primary CTA: **Plan a Gift**

#### **B. How It Works**

* 3 steps (static content)

#### **C. Why Yaadein**

* Bullet points highlighting differentiation

#### **D. Pricing Preview**

* Basic / Premium / Signature  
* Clear note: *Gift cost is separate*

#### **E. Founder Section (Critical)**

* Founder photo  
* Founder name  
* Short story (static text)  
* WhatsApp contact button

#### **F. FAQ Section**

* 6–8 FAQs (static)

---

### **Non-Functional**

* Page load \< 2 seconds  
* Mobile responsive  
* SEO-friendly structure

---

## **5.2 Gift Planning Form (Core Feature)**

### **Objective**

Collect **emotional \+ logistical data** needed to execute gift.

### **Form Sections & Fields**

#### **Section A: Occasion**

* Dropdown (Birthday, Anniversary, Apology, Surprise, Other)

#### **Section B: Receiver Details**

* Receiver age (number)  
* Relationship (dropdown \+ “Other”)  
* Likes (textarea)  
* Dislikes / Avoid (textarea)

#### **Section C: Emotion Intent**

* Open textarea  
  *Prompt:* “What do you want them to feel when they receive this gift?”

#### **Section D: Budget**

* Radio buttons:  
  * ₹500–₹1,000  
  * ₹1,000–₹2,000  
  * ₹2,000+

#### **Section E: Message**

* Message text (textarea)  
* Tone (Sweet / Emotional / Funny / Formal)

#### **Section F: Delivery Info**

* Area / locality (text)  
* Preferred date (date picker)

#### **Section G: User Contact**

* Name  
* Phone (required)  
* Email (optional)

---

### **Validation Rules**

* All textareas: min 10 characters  
* Phone number: required  
* City locked to Kolkata (hardcoded text)

---

## **5.3 Form Submission**

### **On Submit:**

* Save submission to:  
  * Email (to founder)  
  * Google Sheet OR simple backend DB  
* Generate simple Order ID (e.g., YAD-001)

---

## **5.4 Confirmation Page**

### **Content**

* Thank you message  
* Order ID  
* Message:  
  *“We’ll contact you on WhatsApp within 2 hours.”*  
* WhatsApp CTA button

---

## **6\. Payment Flow (Manual MVP)**

### **Approach**

No automated payment gateway required.

### **Flow**

1. User submits form  
2. Founder reviews details  
3. Founder sends UPI / payment link via WhatsApp  
4. Order is confirmed only after payment

### **Website Note**

Display text:

“Payment will be collected after order review on WhatsApp.”

---

## **7\. Admin / Founder Operations (Internal)**

### **Required Only:**

* Access to all form submissions  
* Ability to see:  
  * Order ID  
  * Customer name  
  * Phone  
  * Budget  
  * Occasion  
  * Status (manual)

### **Status Values (Manual)**

* New  
* Payment Pending  
* In Progress  
* Delivered  
* Closed

---

## **8\. Non-Functional Requirements**

* No login required  
* SSL enabled  
* Basic form spam protection  
* Easy content editability (copy changes)

---

## **9\. Tech Stack Recommendation (MVP)**

### **Frontend**

* Next.js   
* Tailwind

### **Backend (Optional)**

* Node.js \+ Express (only form handler)  
* OR Google Forms \+ Google Sheets (acceptable)

### **Hosting**

* Vercel / Netlify

### **Database**

* Google Sheets (MVP)  
* OR MongoDB (if backend exists)

---

## **10\. Risks & Assumptions**

### **Assumptions**

* Users trust founder identity  
* WhatsApp follow-up is acceptable  
* Manual execution is feasible for ≤30 orders/month

### **Risks**

* Low trust → mitigate with founder visibility  
* Too many low-budget orders → pricing clarity

## 

