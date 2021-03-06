namespace WebApi.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string Birthday { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public string Pincode { get; set; }
        public string Phone { get; set; }
        public string Intrest { get; set; }
    }
}