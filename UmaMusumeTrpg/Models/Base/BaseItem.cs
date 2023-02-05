namespace UmaMusumeTrpg.Models.Base
{
    public class BaseItem
    {
        public BaseItem(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
        public string Email { get; set; }
    }
}
