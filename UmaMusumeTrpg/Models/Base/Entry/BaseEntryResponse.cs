namespace UmaMusumeTrpg.Models.Base.Entry
{
    public class BaseEntryResponse
    {
        public BaseEntryResponse(int id, string token)
        {
            Id = id;
            Token = token;
        }

        public int Id { get; set; }
        public string Token { get; set; }
    }
}
