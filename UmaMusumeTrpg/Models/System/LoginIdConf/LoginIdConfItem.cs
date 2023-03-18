namespace UmaMusumeTrpg.Models.System.LoginIdConf
{
    public class LoginIdConfItem
    {
        public LoginIdConfItem(string loginId, int id = 0)
        {
            LoginId = loginId;
            Id = id;
        }
        public string LoginId { get; set; }
        public int Id { get; set; }
    }
}
