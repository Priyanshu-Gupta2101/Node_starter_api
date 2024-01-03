Documentation not complete
## Request and Response Documentation

### **1. User Registration**

- **Endpoint:** `POST /register`
- **Request:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword",
    "phone": "1234567890"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User Register Successfully",
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890"
    }
  }
  ```

### **2. User Login**

- **Endpoint:** `POST /login`
- **Request:**
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login successfully",
    "user": {
      "_id": "user_id",
      "name": "John Doe"
    },
    "token": "user_jwt_token"
  }
  ```

### **3. Forgot Password**

- **Endpoint:** `POST /forgot-password`
- **Request:**
  ```json
  {
    "email": "john@example.com",
    "newPassword": "newsecurepassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Password Reset Successfully. Verify your email"
  }
  ```

### **4. Update User Profile**

- **Endpoint:** `PUT /update`
- **Request:**
  ```json
  {
    "name": "Updated Name",
    "phone": "9876543210"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "user": {
      "_id": "user_id",
      "name": "Updated Name",
      "email": "john@example.com",
      "phone": "9876543210"
    }
  }
  ```

### **5. Delete User**

- **Endpoint:** `DELETE /delete-user`
- **Response:**
  ```json
  {
    "success": true,
    "message": "User deleted successfully"
  }
  ```

### **6. Get User Profile**

- **Endpoint:** `GET /profile`
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  }
  ```

### **7. Admin Registration**

- **Endpoint:** `POST /admin/register`
- **Request:**
  ```json
  {
    "name": "Admin Name",
    "email": "admin@example.com",
    "password": "adminpassword",
    "phone": "1234567890"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Admin Register Successfully"
  }
  ```

### **8. Admin Login**

- **Endpoint:** `POST /admin/login`
- **Request:**
  ```json
  {
    "email": "admin@example.com",
    "password": "adminpassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login successfully",
    "user": {
      "_id": "admin_id",
      "name": "Admin Name"
    },
    "token": "admin_jwt_token"
  }
  ```

### **9. Admin Forgot Password**

- **Endpoint:** `POST /admin/forgot-password`
- **Request:**
  ```json
  {
    "email": "admin@example.com",
    "newPassword": "newadminpassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Password reset successfully. Verify your email"
  }
  ```

### **10. Get All Users (Admin)**

- **Endpoint:** `GET /admin/all-admins`
- **Response:**
  ```json
  {
    "success": true,
    "userTot": 2,
    "message": "All Admin",
    "users": [
      {
        "_id": "user1_id",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "9876543210"
      },
      {
        "_id": "user2_id",
        "name": "Admin Name",
        "email": "admin@example.com",
        "phone": "1234567890"
      }
    ]
  }
  ```

### **11. Update User by Admin**

- **Endpoint:** `PUT /admin/update-user/:userId`
- **Request:**
  ```json
  {
    "name": "Updated Admin Name",
    "phone": "8765432109"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "user": {
      "_id": "admin_id",
      "name": "Updated Admin Name",
      "email": "admin@example.com",
      "phone": "8765432109"
    }
  }
  ```

### **12. Get User Profile by Admin**

- **Endpoint:** `GET /admin/get-user-profile`
- **Request:** `?email=john@example.com`
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  }
  ```

### **13. Admin Delete User**

- **Endpoint:** `DELETE /admin/delete-user/:userId`
- **Response:**

  ```json
  {
    "success": true,
    "message": "User deleted successfully"
  }
  ```

### **14. Verify Email**

- **Endpoint:** `POST /verify-email/:email/:code`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Email verified successfully"
  }
  ```

### **15. Upload Profile Image**

- **Endpoint:** `POST /profile-image`
- **Request:**
  - Form Data: `file` (Image file)
- **Response:**
  ```json
  {
    "success": true,
    "message": "Profile Image Uploaded"
  }
  ```

### **16. Master Admin Login**

- **Endpoint:** `POST /master-admin/login`
- **Request:**
  ```json
  {
    "email": "masteradmin@example.com",
    "password": "masteradminpassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Master Admin login successful",
    "token": "master_admin_jwt_token"
  }
  ```

### **17. Delete Admin (Master Admin)**

- **Endpoint:** `DELETE /admin/delete-admin`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Admin deleted successfully"
  }
  ```

These are the request and response documentation for each route in your Node.js API.

## Functionality:

1. **User Registration and Authentication:**

   - **Registration:**
     - Handles user registration with input validations.
     - Sends a verification code via email for account activation.
   - **Login:**
     - Manages user login and issues a JWT token upon successful authentication.
     - Checks email verification status before allowing login.
   - **Password Reset:**
     - Allows users to reset their passwords by generating a new password.
     - Sends a verification code via email for password reset.
   - **User Profile Management:**
     - Enables users to update their profile information.
     - Supports deletion of user accounts, including associated Cloudinary images.
     - Retrieves the profile of the authenticated user.
   - **Profile Image Upload:**
     - Handles the upload of a user's profile image to Cloudinary.

2. **Admin Operations:**

   - **User Management:**
     - Retrieves all user profiles for admin use.
     - Allows admin users to update user information.
   - **Admin Management:**
     - Retrieves all admin profiles.
     - Handles registration and login for admin users.
     - Supports password resets for admin users.
     - Manages login for the master admin.
     - Retrieves a user's profile by email for admin use.
     - Deletes an admin account, including associated Cloudinary images.

3. **Database Connection:**

   - Establishes a connection to the MongoDB database.

4. **Authentication Helpers and Middleware:**

   - **Authentication Helpers:**
     - Provides functions for password hashing, verification code generation, and email verification.
   - **Authentication Middleware:**
     - Protects routes based on JWT and admin roles.

5. **User Model and Schema:**

   - Defines the Mongoose schema for the user model, including various user-related fields.

6. **Cloudinary Configuration:**

   - Configures and exports the Cloudinary object using environment variables.

7. **Multer Configuration:**

   - Configures and exports Multer for handling file uploads.

8. **Nodemailer Configuration:**

   - Configures Nodemailer to send verification codes via email.

9. **Cron Job for Cleanup:**
   - Sets up a cron job to delete unverified user accounts after a specified timeframe.

These functionalities collectively form a comprehensive user authentication and management system with features such as registration, login, profile updates, password resets, and admin operations.
